$(function () {
    initProvince();
    function initProvince() {
        $.get("/api/v1/getAddressData", {}, function (res) {
            if (res.status == "y") {
                var strOption = '<option value="0">' + '请选择省份' + '</option>';
                $(res.data.province).each(function (index) {
                    strOption += '<option value="' + this.ProID + '">' + this.name + '</option>';
                })
                $("#province").html($(strOption));

                ////当省份数据选择改变的时候
                var cityObj = $(res.data.citys);
                $("#province").change(function (res) {
                    var that = $(this).val();
                    var strOption1 = '<option value="0">' + '请选择城市' + '</option>';
                    $(cityObj).each(function (index) {
                        if (that == this.ProID) {
                            strOption1 += '<option value="' + this.CityID + '">' + this.name + '</option>';
                        }
                    })
                    $("#city").html($(strOption1));
                    $("#province").change(function (res) {
                        $("#area").htwolailml('<option value="0">' + '请选择县区' + '</option>');
                    });
                });

                ////当城市数据选择改变的时候
                var areaObj = $(res.data.areas);
                $("#city").change(function (res) {
                    var that = $(this).val();
                    var strOption2 = '<option value="0">' + '请选择县区' + '</option>';
                    $(areaObj).each(function (index) {
                        if (that == this.CityID) {
                            strOption2 += '<option value="' + this.Id + '">' + this.DisName + '</option>';
                        }
                    })
                    $("#area").html($(strOption2));
                });
            }
        }, "json");
    }
})