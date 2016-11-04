from flask import Blueprint

routes = Blueprint('routes', __name__)

from .user import *
from .event import *
from .ads import *
from .topics import *
from .posts import *
