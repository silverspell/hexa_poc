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
## DI konusu

DI tarafında bu PoC için herhangi bir 3rd parti kullanılmamıştır. Duck typing ve JavaScript'in module patterni esas alınarak kontrat implemantasyonları hazırlanmıştır. PoC'nin zayıf noktası burasıdır. Production tarafında Awilix gibi bir DI kütüphanesi ile geliştirme yapılabilir.

## Domain Yapısı

Domain 4 katmandan oluşmaktadır. Domainin en altında entites bulunmaktadır. Burası hiç bağımlılık içermeyen basit veri sınıflarıdır. CommandBus Domain'in giriş noktasıdır. Domain dışarıya tamamen kapalı bir formdur ve sadece konu olan business logici barındırır. Repo katmanı dışarıdan inject edilmekle birlikte servis katmanları test edilebilirlik adına olması gerektiği gibi sadece alt katmanındaki entitylere bağımlılık oluşturur.

## Adaptörler

Adaptörler, üçüncü parti servislerin domain ile nasıl entegre olacağını ve bu domain ile etkileşirken göstereceği davranışları belirler. Bu PoC'de alternatifli olarak kullanılabilen In memory DB ve postgresql ile Fastify ve Express bu domaine nasıl girdi sağlayabilir gösterilmiştir.

## Controllers

Adaptörlerin wraplemek zorunda olduğu, 3rd parti ekipler ile el sıkışılan kontratlardır. 

## TODO

- Config ve infrastructure katmanlarını belirgin hale getirmek
- ~~Cross cutting concerns~~
- Functional test örnekleri gerçekleştirmek.
- ~~Async yapılar için EventEmitter~~
- Swagger ?