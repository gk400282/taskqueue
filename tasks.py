from __future__ import absolute_import, unicode_literals
from celery import Celery
import time

celery = Celery('tasks', broker='pyamqp://guest@localhost//', backend='rpc://')



@celery.task
def append(entered_text):
	time.sleep(5)
	database = open('database.txt','a')
	database.write(entered_text+"\n")

@celery.task
def delete():
	time.sleep(5)
	database = open('database.txt','w')
	database.write("")