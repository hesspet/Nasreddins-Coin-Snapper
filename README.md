# Nasreddin's Coin Snapper

Eine progressive Web-App auf Basis von Blazor WebAssembly zum Aufnehmen und Speichern von Münzaufnahmen.

## Projektaufbau

- `NCS-TEST1.sln` – Visual-Studio-Lösung mit dem Blazor-Projekt.
- `NCS-TEST1/` – Quellcode der Anwendung inklusive PWA-Assets, Service-Worker und lokaler Speicherlogik.

## Funktionen

- Kameraaufnahme über `<InputFile>` mit `capture="environment"` für Mobilgeräte.
- Vorschau der aufgenommenen Münze direkt in der App.
- Persistente Speicherung des Fotos im `localStorage`, damit die Aufnahme offline verfügbar bleibt.
- Service Worker und Manifest für die Nutzung als Progressive Web App.

## Entwicklung starten

1. .NET 8 SDK installieren.
2. Abhängigkeiten wiederherstellen und Entwicklungsserver starten:

   ```bash
   dotnet restore NCS-TEST1/NCS-TEST1.csproj
   dotnet run --project NCS-TEST1/NCS-TEST1.csproj
   ```

3. Die Anwendung ist anschließend unter `https://localhost:5001` bzw. `http://localhost:5000` erreichbar. Für den Zugriff anderer Geräte im selben Intranet stellt der Entwicklungsserver die Anwendung zusätzlich unter `https://<HOST-IP>:5001` bzw. `http://<HOST-IP>:5000` bereit.

Für die PWA-Funktionen (Installierbarkeit, Offline-Nutzung) sollte die App über HTTPS ausgeliefert werden.
