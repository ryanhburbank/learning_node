function form() {
  return '<html>' +
     '<head>' + 
     '<meta http-equiv="Content-Type" content="text/html; ' +
     'charset=UTF-8" />' +
     '</head>' +
     '<body>' +
     '<form action="/upload" enctype="multipart/form-data" method="post">' +
     '<input type="file" name="upload">' +
     '<input type="submit" value="Upload file" />' +
     '</form>' +
     '</body>' +
     '</html>';
}

exports.form = form;
