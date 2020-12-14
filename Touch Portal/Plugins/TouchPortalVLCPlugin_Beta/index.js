showDownload()

function showDownload() {
    const urlParams = new URLSearchParams(window.location.search);
    const update = urlParams.get('update');
    const download = urlParams.get('download');
    const makeSure = urlParams.get('really');
    const version = urlParams.get('from');
    if (update == "true" && version != null) {
        var element = document.getElementById("update");
        element.style.display = "block";
    } else if (download == "true" && makeSure == "yes") {
        var element = document.getElementById("download");
        element.style.display = "block";
    }
}

function download() {
    window.location.replace("https://pjiesco.github.io/Touch Portal/Plugins/TouchPortalVLCPlugin_Beta/TouchPortalVLCPlugin.tpp");
};