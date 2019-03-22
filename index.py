from flask import Flask, url_for, request, render_template
from celery import Celery
from tasks import append, delete, celery

app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
	return render_template('start.html')

@app.route('/', methods=['POST'])
def index_post():
	append.apply_async(args=[(request.form['text'])], queue='append')
	return ("sent", 200, {'Access-Control-Allow-Origin': '*'})


@app.route('/stop', methods=['GET'])
def stop():
	celery.control.purge()
	return ("terminated", 200, {'Access-Control-Allow-Origin': '*'})

@app.route('/delete', methods=['GET'])
def clean():
	delete.apply_async(queue='append')
	return ("contents deleted", 200, {'Access-Control-Allow-Origin': '*'})

@app.route('/pause', methods=['GET'])
def pause():
	celery.control.cancel_consumer('append')
	return ("paused", 200, {'Access-Control-Allow-Origin': '*'})

@app.route('/resume', methods=['GET'])
def resume():
	celery.control.add_consumer('append')
	return ("resumed", 200, {'Access-Control-Allow-Origin': '*'})

if __name__ == "__main__":  # This is for local testing
	app.run(host='localhost', port=5000, debug=True)