from dotenv import load_dotenv
load_dotenv() 

from flask import Flask
from flask_cors import CORS
from routes.whyme import whyme_bp

app = Flask(__name__)
CORS(app)
app.register_blueprint(whyme_bp)
#print("\nRegistered routes:")
#for rule in app.url_map.iter_rules():
#    print(f"{','.join(rule.methods)}  -->  {rule.rule}")
if __name__ == "__main__":
    app.run(debug=True)
