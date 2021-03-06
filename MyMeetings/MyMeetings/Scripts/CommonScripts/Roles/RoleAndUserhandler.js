﻿$(function () {
    $(".user-id").click(function (e) {
        $.get("/API/RoleForUsers/" + $("#" + e.currentTarget.id).val(),displayRoles);
        
        function displayRoles(data) {
            console.log(data);
            var role = JSON.parse(data);
            //$('#list-of-roles li').remove();
            $("div[name='role-div']").remove();
            role.forEach(function(elem) {
                //$("#list-of-roles").append("<li><input type='checkbox' data-userId="+elem.userId+" name='roles' " + (elem.IsAvaible ? "checked" : " ") + " value=" + elem.Role.Id + ">" + elem.Role.Name + "</li>");
                $("#list-of-roles").append("<div  name='role-div' style='padding-right: 35px;'><input type='checkbox' name='roles'" + (elem.IsAvaible ? "checked" : " ") + " value=" + elem.Role.Id + ">" + elem.Role.Name + "</div>");
                console.log("1");
            });

        }
    });
    $(".btn-save").click(function (e) {
        var arr = [];
        $("input[name='roles']").each(function(index, element) {
            var role = {};
            role.IsAvaible = element.checked;
            role.RoleId = element.value;
            arr.push(role);
        });
        var data = JSON.stringify(arr);
        //console.log(data);
        $.ajax({
            type: "PUT",
            data: data,
            url: "/API/RoleForUsers/" + findCurrentUserId(),
            contentType: "application/json"
        });

        function findCurrentUserId() {
            return $("input[name='role']:checked").val();
        }
    });

});
