#!/usr/bin/env python

from bottle import route, static_file, view, request, default_app, run
import os


@route('/js/<filename>')
def js_static(filename):
    return static_file(filename, root='./js')


@route('/images/<filename>')
def img_static(filename):
    return static_file(filename, root='./images')


@route('/css/<filename>')
def css_static(filename):
    return static_file(filename, root='./css')


@route('/fonts/flash_cards/<filename>')
def font_static(filename):
    return static_file(filename, root='./fonts/flash_cards')


@route('/views/<filename>')
def template_static(filename):
    return static_file(filename, root='./views')


@route("/")
@view("main")
def hello():
    return dict(content="Hello from Python!")

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    run(host='0.0.0.0', port=port, debug=True)
