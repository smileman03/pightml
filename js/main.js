$(document).ready(function(){
 $('.header').height($(window).height());
})
$('.navbar-nav .nav-link').click(function(){
    $('.navbar-nav .nav-link').removeClass('active');
    $(this).addClass('active');
})
$(function() {
        // ID selector on Master Checkbox
        var masterCheck = $("#masterCheck");
        // ID selector on Items Container
        var listCheckItems = $("#list-wrapper :checkbox");
 
        // Click Event on Master Check
        masterCheck.on("click", function() {
          var isMasterChecked = $(this).is(":checked");
          listCheckItems.prop("checked", isMasterChecked);
          getSelectedItems();
        });
 
        // Change Event on each item checkbox
        listCheckItems.on("change", function() {
          // Total Checkboxes in list
          var totalItems = listCheckItems.length;
          // Total Checked Checkboxes in list
          var checkedItems = listCheckItems.filter(":checked").length;
 
          //If all are checked
          if (totalItems == checkedItems) {
            masterCheck.prop("indeterminate", false);
            masterCheck.prop("checked", true);
          }
          // Not all but only some are checked
          else if (checkedItems > 0 && checkedItems < totalItems) {
            masterCheck.prop("indeterminate", true);
          }
          //If none is checked
          else {
            masterCheck.prop("indeterminate", false);
            masterCheck.prop("checked", false);
          }
          getSelectedItems();
        });
 
        function getSelectedItems() {
          var getCheckedValues = [];
          getCheckedValues = [];
          listCheckItems.filter(":checked").each(function() {
            getCheckedValues.push($(this).val());
          });
          $("#selected-values").html(JSON.stringify(getCheckedValues));
        }
      });
	  
	  
	  $(function() {
        // ID selector on Master Checkbox
        var masterCheck = $("#masterCheck2");
        // ID selector on Items Container
        var listCheckItems = $("#list-wrapper2 :checkbox");
 
        // Click Event on Master Check
        masterCheck.on("click", function() {
          var isMasterChecked = $(this).is(":checked");
          listCheckItems.prop("checked", isMasterChecked);
          getSelectedItems();
        });
 
        // Change Event on each item checkbox
        listCheckItems.on("change", function() {
          // Total Checkboxes in list
          var totalItems = listCheckItems.length;
          // Total Checked Checkboxes in list
          var checkedItems = listCheckItems.filter(":checked").length;
 
          //If all are checked
          if (totalItems == checkedItems) {
            masterCheck.prop("indeterminate", false);
            masterCheck.prop("checked", true);
          }
          // Not all but only some are checked
          else if (checkedItems > 0 && checkedItems < totalItems) {
            masterCheck.prop("indeterminate", true);
          }
          //If none is checked
          else {
            masterCheck.prop("indeterminate", false);
            masterCheck.prop("checked", false);
          }
          getSelectedItems();
        });
 
        function getSelectedItems() {
          var getCheckedValues = [];
          getCheckedValues = [];
          listCheckItems.filter(":checked").each(function() {
            getCheckedValues.push($(this).val());
          });
          $("#selected-values2").html(JSON.stringify(getCheckedValues));
        }
      });