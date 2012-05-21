#include "stdafx.h"

#include "LimitSingleInstance.h"

#define MAX_ARGS_LENGTH 3000

DWORD LaunchTarget(const TCHAR *target, const TCHAR *arguments, const TCHAR *dir, PROCESS_INFORMATION *ppiProcessInfo)
{
	STARTUPINFOW siStartupInfo;
    PROCESS_INFORMATION piProcessInfo;
    ZeroMemory(&siStartupInfo, sizeof(siStartupInfo));
    ZeroMemory(&piProcessInfo, sizeof(piProcessInfo));
    siStartupInfo.cb = sizeof(siStartupInfo); 

	TCHAR args[MAX_ARGS_LENGTH];
	ZeroMemory(args, sizeof(args));
	
	// Prepend target as a first argument
	size_t target_len = _tcslen(target);
	args[0] = _T('"');
	_tcscpy(args + 1, target);
	args[target_len + 1] = _T('"');
	args[target_len + 2] = _T(' ');
	_tcsncpy(args + target_len + 3, arguments, MAX_ARGS_LENGTH - target_len - 4);

	if (CreateProcess(target, args, NULL, NULL, TRUE, CREATE_NO_WINDOW,
			NULL, dir, &siStartupInfo, &piProcessInfo))
	{
		memcpy(ppiProcessInfo, &piProcessInfo, sizeof(piProcessInfo));
		return 0;
	}
	
	return 1;
}

int APIENTRY _tWinMain(HINSTANCE hInstance,
                     HINSTANCE hPrevInstance,
                     LPTSTR    lpCmdLine,
                     int       nCmdShow)
{
	CLimitSingleInstance limit(_T("__darkmatter_suite__"));

	if (limit.IsAnotherInstanceRunning())
	{
		return 0;
	}

	TCHAR *point = NULL;
	TCHAR module_name[MAX_PATH];
	GetModuleFileName(hInstance, module_name, MAX_PATH);

	size_t module_name_len = _tcslen(module_name);

	// module path
	TCHAR module_path[MAX_PATH];
	lstrcpyn(module_path, module_name, module_name_len);

	point = _tcsrchr(module_path, _T('\\'));
	*(++point) = NULL;

	size_t module_path_len = _tcslen(module_path);

	// jre path
	TCHAR jre_path[MAX_PATH];

	_tcscpy(jre_path, module_path);
	_tcscpy(jre_path + module_path_len, _T("jre\\bin;"));

	size_t jre_path_len = _tcslen(jre_path);

	// add jre path to the PATH env. variable
	DWORD new_path_len = GetEnvironmentVariable(_T("PATH"), NULL, 0);
	new_path_len += MAX_PATH;

	TCHAR *path = new TCHAR[new_path_len];

	_tcscpy(path, jre_path);

	GetEnvironmentVariable(_T("PATH"), path + jre_path_len, new_path_len - jre_path_len);
	SetEnvironmentVariable(_T("PATH"), path);
	
	delete[] path;

	// launch dm-browser
	TCHAR dm_browser_path[MAX_PATH];
	TCHAR dm_browser_img[MAX_PATH];

	_tcscpy(dm_browser_path, module_path);
	_tcscpy(dm_browser_path + module_path_len, _T("darkmatter"));

	_tcscpy(dm_browser_img, module_path);
	_tcscpy(dm_browser_img + module_path_len, _T("darkmatter\\dm-browser.exe"));

	PROCESS_INFORMATION piDMBrowser;
	LaunchTarget(dm_browser_img, _T("application.lispx not-interactive"), dm_browser_path, &piDMBrowser);

	// launch firefox
	TCHAR firefox_profile[MAX_PATH];
	TCHAR firefox_img[MAX_PATH];

	_tcscpy(firefox_profile, module_path);
	_tcscpy(firefox_profile + module_path_len, _T("profile"));

	_tcscpy(firefox_img, module_path);
	_tcscpy(firefox_img + module_path_len, _T("firefox\\firefox.exe"));

	TCHAR firefox_args[MAX_ARGS_LENGTH];

	_tcscpy(firefox_args, _T("-no-remote -profile \""));
	_tcscpy(firefox_args + _tcslen(firefox_args), firefox_profile);
	_tcscpy(firefox_args + _tcslen(firefox_args), _T("\""));

	PROCESS_INFORMATION piFirefox;
	LaunchTarget(firefox_img, firefox_args, firefox_profile, &piFirefox);

	// wait for firefox
	WaitForSingleObject(piFirefox.hProcess, INFINITE);

	// close dm-browser
	INTERNET_PORT port = 28095;
	HINTERNET hSession = NULL, hConnect = NULL, hRequest = NULL;

	hSession = WinHttpOpen(NULL, WINHTTP_ACCESS_TYPE_NO_PROXY, NULL, NULL, 0);

	if (hSession)
		hConnect = WinHttpConnect(hSession, _T("localhost"), port, 0);

	if (hConnect)
		hRequest = WinHttpOpenRequest(hConnect, L"GET", _T("/stop"),
										NULL, WINHTTP_NO_REFERER,
										WINHTTP_DEFAULT_ACCEPT_TYPES,
										0);

	if (hRequest)
		WinHttpSendRequest(hRequest,
							WINHTTP_NO_ADDITIONAL_HEADERS,
							0, WINHTTP_NO_REQUEST_DATA, 0,
							0, 0);

	WinHttpCloseHandle(hRequest);
	WinHttpCloseHandle(hConnect);
	WinHttpCloseHandle(hSession);

}