1. Open VScode
2. cd "something/something/something/420projectreal.Server"
3. Create .env file in "420projectreal.Server" file 
4. Paste OPENAI_API_KEY="insert your api key here"
5. Paste this into your console  pip install --user Flask flask-cors openai==0.28 python-dotenv
6. Type python app.py into terminal to open the API 
Should see something like this : 
 Serving Flask app 'app'
 
Debug mode: on
INFO:werkzeug:WARNING: This is a development server. Do not use it in a production deployment. Use a production WSGI server instead.
 
Running on http://127.0.0.1:5000/
INFO:werkzeug:Press CTRL+C to quit
7. Go into visual studio, click the run button
8. Localhost should open, redirect to our page from swagger
9. Enter actual data into the generator otherwise a 500 error will be thrown
