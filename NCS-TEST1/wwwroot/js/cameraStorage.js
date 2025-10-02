window.ncsCamera = {
    savePhoto: function (dataUrl) {
        if (!dataUrl) {
            window.localStorage.removeItem('ncs-camera-photo');
            return;
        }

        try {
            window.localStorage.setItem('ncs-camera-photo', dataUrl);
        } catch (error) {
            console.error('Konnte Foto nicht speichern', error);
        }
    },
    loadPhoto: function () {
        return window.localStorage.getItem('ncs-camera-photo');
    },
    clearPhoto: function () {
        window.localStorage.removeItem('ncs-camera-photo');
    }
};
