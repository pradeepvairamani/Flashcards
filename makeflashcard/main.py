#!/usr/bin/env python

from bottle import Bottle, route, static_file, view, request, default_app, run
import os

bottle = Bottle()


@bottle.route('/js/<filename>')
def js_static(filename):
    return static_file(filename, root='./js')


@bottle.route('/images/<filename>')
def img_static(filename):
    return static_file(filename, root='./images')


@bottle.route('/css/<filename>')
def css_static(filename):
    return static_file(filename, root='./css')


@bottle.route('/fonts/flash_cards/<filename>')
def font_static(filename):
    return static_file(filename, root='./fonts/flash_cards')


@bottle.route('/views/<filename>')
def template_static(filename):
    return static_file(filename, root='./views')

@bottle.route('/lib/<filename>')
def lib_static(filename):
    return static_file(filename, root='./lib')


@bottle.route("/")
@view("main")
def hello():
    return dict(content="Hello from Python!")

#if __name__ == "__main__":
#    port = int(os.environ.get("PORT", 5000))
#    run(host='0.0.0.0', port=port, debug=True)
