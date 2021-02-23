# import os
# import zipfile
# from flask import Flask, request, redirect, url_for, flash, render_template, send_file, abort
# from werkzeug.utils import secure_filename

# ALLOWED_EXTENSIONS = set(['zip', 'tar', 'rar'])

# app = Flask(__name__)

# def allowed_file(filename):
#     return '.' in filename and \
#            filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# def retext(filename):
#     extension = filename.split(".",1)[1]
#     return extension

# def extract(filename, ext):
#     if(ext == "zip"):
#         os.system("unzip {}".format(filename))
#     elif(ext == "tar"):
#         os.system("tar xvf {}".format(filename))
#     elif(ext == "rar"):
#         os.system("unrar e {}".format(filename))