# taskqueue

- Clone the repository
- Set up a rabbitmq server locally (no configuration needed)
- Set up your environment (if you want to)
- Go to root project directory and install modules with requirements.txt (pip install -r requirements.txt)
- run index.py (python index.py)
- on a separate console, run celery (celery -A tasks worker --loglevel=INFO)
- Go to localhost:5000
