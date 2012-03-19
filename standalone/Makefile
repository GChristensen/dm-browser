# Run `lein appeingine-prepare' first

all:
	cp ../application.* ./
	cp -R ../lib ./
	cp -R ../src ./
	cp -R ../resources ./    
	cp -R ../war ./
	cp ../firefox/dmbutton/dmbutton.xpi ./dmbutton-firefox.xpi
	wget "http://download.sourceforge.net/lispx-proxy/lispx-windows-binaries-0.3.tar.gz"
	wget "http://download.sourceforge.net/lispx-proxy/lispx-linux-binary-0.3.tar.gz"
	tar xzf lispx-windows-binaries-0.3.tar.gz
	tar zxf lispx-linux-binary-0.3.tar.gz
	rm *.tar.gz
	rm lispx.exe
	mv ./lispx ./dm-browser.elf
	mv ./lispx-gui.exe ./dm-browser.exe

clean:
	rm -R ./lib
	rm -R ./src
	rm -R ./war
	rm -R ./resources
	rm ./application.*
	rm ./dm-browser*
	rm *.xpi
