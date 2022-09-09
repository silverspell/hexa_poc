# Hexagonal Mimari Örneği

## Dizin Yapısı:

```
__tests__: Jest testlerini kapsar,
adapters: adaptörler.
controllers: controllerlar.
domain:
    commandbus: Domaine giriş noktasıdır. Hexagona giriş olarak da bilinir. Tüm dış partiler bu noktadan CommandBus ile içeriye giriş yaparlar.
    entities: 0 bağımlılık içeren pure data sınıfları.
    repositories: commandbus üzerinden verilen datapteri kullanan repo katmanı.
    services: servis katmanı.
index.js: Aslında konfig olması gereken sadece PoC amaçlı yazılmış entrypoint.
``` 
