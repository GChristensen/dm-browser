# Run `lein appeingine-prepare' first

all:
	cp ../war/WEB-INF/lib/* ./shared
	cp ../lib/dev/* ./shared
	cp -R ../src/* ./source
	cp -R ../war ./
	cp ../firefox/dmbutton/dmbutton.xpi ./dmbutton-firefox.xpi
	wget "http://download.sourceforge.net/lispx-proxy/lispx-windows-binaries-0.2.tar.gz"
	wget "http://download.sourceforge.net/lispx-proxy/lispx-linux-binary-0.2.tar.gz"
	tar xzf lispx-windows-binaries-0.2.tar.gz
	tar zxf lispx-linux-binary-0.2.tar.gz
	rm *.tar.gz
	rm lispx.exe
	mv ./lispx ./dm-browser.elf
	mv ./lispx-gui.exe ./dm-browser.exe

clean:
	rm ./shared/*
	rm -R ./source/*
	rm -R ./war
	rm ./dm-browser*
