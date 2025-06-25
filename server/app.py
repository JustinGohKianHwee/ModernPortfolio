from dotenv import load_dotenv
load_dotenv() 

from flask import Flask
from flask_cors import CORS
from routes.whyme import whyme_bp

app = Flask(__name__)
CORS(app)
app.register_blueprint(whyme_bp)
if __name__ == "__main__":
    import os

    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=False)
