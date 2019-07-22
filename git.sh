if [ -d pulgas-al-rescate ];
then
	rm -R pulgas-al-rescate
fi
git add .
git commit -m "commit generico"
git push origin
