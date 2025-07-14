function copyToClipboard(elementId) {
            var text = document.getElementById(elementId).innerText;
            var textArea = document.createElement("textarea");
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.select();
            try { document.execCommand('copy'); } catch (err) {}
            document.body.removeChild(textArea);
        }
        function mostrarAlertaFinal() {
            document.getElementById('customAlert').style.display = 'flex';
        }
        function cerrarAlertaFinal() {
            document.getElementById('customAlert').style.display = 'none';
        }
        // Cierra alerta con tecla Escape
        document.addEventListener('keydown', function(e) {
            if (e.key === "Escape") cerrarAlertaFinal();
        });
        // Cierra alerta si se hace click fuera de la caja
        document.getElementById('customAlert').addEventListener('click', function(e) {
            if (e.target === this) cerrarAlertaFinal();
        });