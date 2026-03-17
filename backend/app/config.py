import os

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'kidc-secret-key-change-in-production'
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or 'sqlite:///kidc.db'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
