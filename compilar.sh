if [ -d pulgas-al-rescate ];
then
	rm -R pulgas-al-rescate
fi
ficdown --format html --in pulgas-al-rescate.md --out pulgas-al-rescate --author "Billy Fernández" --template template --language es
chromium-browser pulgas-al-rescate/index.html
