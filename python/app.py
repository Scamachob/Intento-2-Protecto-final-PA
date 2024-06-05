from flask import Flask, send_from_directory

app = Flask(__name__, static_folder='C:/Users/Kendr/OneDrive/Documents/web/static', static_url_path='/static')

@app.route('/remote_control')
def remote_control():
    return send_from_directory('C:/Users/Kendr/OneDrive/Documents/web/html', 'remote_control.html')

if __name__ == '__main__':
    app.run(debug=True)
