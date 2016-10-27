 // for showing number of comparisons
function ComparisonSummary() {
  // Look for the relevant cookie.
  var searchName = "PlasticSoldierReview=";
  var cookieFound = 0;
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
          c = c.substring(1);
      }
      if (c.indexOf(searchName) == 0) {
          var cookieFound = 1;

          // Isolate any existing values in the cookie.
          var valueString = c.substring(searchName.length, c.length);
          var stringSplitArray = valueString.split('&');

          var MessageText = stringSplitArray.length.toString() + " / 4 added";
          document.getElementById("CompareSummarySpan").textContent = MessageText;
      }
  }

  if (cookieFound == 0) {
      document.getElementById("CompareSummarySpan").textContent = "0 / 4 added";
  }

  return "";
}

// Switching a cookie value on or off.
function SwitchValueInCookie(ThisCheckBox) {
    var keyPartOfName;
    keyPartOfName = ThisCheckBox.id.substring(22, ThisCheckBox.id.length);
    if (ThisCheckBox.checked) AddCookie(keyPartOfName)
    else RemoveCookie(keyPartOfName);
}

// for adding a new value to a cookie
function AddCookie(NewValue) {

    // Look for the relevant cookie.
    var searchName = "PlasticSoldierReview=";
    var cookieFound = 0;
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(searchName) == 0) {
            var cookieFound = 1;

            // Isolate any existing values in the cookie.
            var valueString = c.substring(searchName.length, c.length);
            var stringSplitArray = valueString.split('&');
            var alreadyThere = [];
            var EqualsPosition;

            for (elementNumber = 0; elementNumber < stringSplitArray.length; elementNumber++) {
                EqualsPosition = stringSplitArray[elementNumber].indexOf("=");
                alreadyThere[elementNumber] = stringSplitArray[elementNumber].substring(EqualsPosition + 1, stringSplitArray[elementNumber].length);
                // Check the new value is not already saved in the cookie.
                if (NewValue == alreadyThere[elementNumber]) return "";
            }

            // Check the compare values cookie is not full.
            if (alreadyThere.length == 4) {
                alert("Already have 4 sets to compare!");
                return "";
            }

            // Add new value to existing cookie string and save.
            var newString = "";
            if (valueString == "") {
                newString = "comp" + NewValue + "=" + NewValue;
            }
            else {
                newString = valueString + "&comp" + NewValue + "=" + NewValue;
            }
            document.cookie = "PlasticSoldierReview=" + newString + "; expires=Thu, 18 Dec 2099 23:00:00 UTC";
        }
    }

    if (cookieFound == 0) {
        // Create fresh, new cookie.
        newString = "comp" + NewValue + "=" + NewValue;
        document.cookie = "PlasticSoldierReview=" + newString + "; expires=Thu, 18 Dec 2099 23:00:00 UTC";
    }

    return "";
}

// for removing a value from a cookie
function RemoveCookie(NewValue) {

    // Look for the relevant cookie.
    var searchName = "PlasticSoldierReview=";
    var cookieFound = 0;
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(searchName) == 0) {
            var cookieFound = 1;

            // Isolate any existing values in the cookie.
            var valueString = c.substring(searchName.length, c.length);
            var stringSplitArray = valueString.split('&');
            var alreadyThere = [];
            var EqualsPosition;
            var newString = "";

            for (elementNumber = 0; elementNumber < stringSplitArray.length; elementNumber++) {
                EqualsPosition = stringSplitArray[elementNumber].indexOf("=");
                alreadyThere[elementNumber] = stringSplitArray[elementNumber].substring(EqualsPosition + 1, stringSplitArray[elementNumber].length);
                // Check the new value against the current one.
                if (NewValue == alreadyThere[elementNumber]) {
                    // Ignore value when rebuilding cookie string.
                }
                else {
                    // Add existing value to rebuilding cookie string.
                    if (newString != "") newString = newString + "&";
                    newString = newString + stringSplitArray[elementNumber];
                }
            }

            // Save new string, either the same as before or with the indicated value removed if previously there.
            document.cookie = "PlasticSoldierReview=" + newString + "; expires=Thu, 18 Dec 2099 23:00:00 UTC";
        }
    }

    return "";
}
    
