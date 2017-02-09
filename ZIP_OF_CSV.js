	/* Add these scripts in your page */
	
	/*<script type="text/javascript" src="http://stuk.github.io/jszip/dist/jszip.min.js"></script>
    <script type="text/javascript" src="http://stuk.github.io/jszip/vendor/FileSaver.js"></script>*/
	

	var zip = new JSZip();
	
	var csv = function () {
		
		var csv = JSONToCSVConvertor(JSON_DATA,FIELD_NAME, "", true);

		return csv;	
		
	}();
	
	zip.file(FILE_NAME, csv);
	zip.generateAsync({
		type: "blob"
	}).then(function(blob) {
		saveAs(blob, "ZIP_FILE.zip");
	});
	
	function JSONToCSVConvertor(JSONData,data_names, ReportTitle, ShowLabel) {

        var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;

        var CSV = '';

        if (true) {
            var row = "";

            row = data_names;

            row = row.slice(1, -1);
            row = row.replace(/ /g,'');

            CSV += row + '\r\n';
        }

        for (var i = 0; i < arrData.length; i++) {
            var row = "";

            for (var index in arrData[i]) {
                row += '"' + arrData[i][index] + '",';
            }
            row = row.replace(/null/g,' ');
            row.slice(0, row.length - 1);

            CSV += row + '\r\n';
        }

        if (CSV == '') {
            alert("Invalid data");
            return;
        }

        return CSV;
    }