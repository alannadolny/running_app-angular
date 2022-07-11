# WALKIE TALKIE

## CEL PROJEKTU

Główym celem projektu jest zapoznanie się z podstawami frameworku Angular.

## SPIS TREŚCI

- [URUCHOMIENIE PROJEKTU](#uruchomienie-projektu)
- [UŻYTE TECHNOLOGIE / BIBLIOTEKI](#użyte-technologie-/-biblioteki)
- [FUNKCJONALNOŚCI](#funkcjonalności)
- [STATUS PROJEKTU](#status-projektu)
- [ZRZUTY EKRANU](#zrzuty-ekranu)

## URUCHOMIENIE PROJEKTU

W celu uruchomienia projektu należy wejść w folder backend i zainstalować zależności wpisując polecenie:

```
yarn install
```

lub

```
npm i
```

Następnie powtórzyć to samo w folderze z frontendem.
W tle musi być uruchomiona baza danych MongoDB.

W folderze z backendem można dodać plik .env, w którym można dodać konfigurację wg wzoru podanego poniżej:

```
MONGO_HOST='host bazy mongodb np.localhost'
MONGO_PORT='port bazy mongodb np.27017'
APP_PORT='port, na którym ma być wystawiony backend 5000'
```

Po wykonaniu powyższych czynności należy wpisać w folderze z backendem

```
node index.js
```

oraz w folderze z frontedem

```
ng serve --open
```

## UŻYTE TECHNOLOGIE / BLIBLOTEKI

Frontend:

- @angular/animations
- @angular/forms
- @angular/material
- @angular/router
- lodash
- chart.js
- primeng
- rxjs

Backend:

- cors
- dotenv
- express
- mongoose

## FUNKCJONALNOŚCI

- Wyświetlanie powitalnego headera z aktualnym dniem tygodnia.
- Wyświetlanie wykresów z dystansem, spalonymi kaloriami, średnią prędkością oraz czasem biegu.
- Wyświetlanie średnich statystk wraz z ogólnymi informacjami.
- Wyświetlanie listy aktywności w postaci tabeli.
- Każdy element w tabeli jest rozwijany. Po rozwinięciu wyświetlane są szczegółowe informacje o aktywności.
- Możliwość dodawania nowych aktywności za pomocą odpowiedniego formularza (pola są odpowiednio walidowane)
- Możliwość usunięcia błędnych aktywności.

## STATUS PROJEKTU

Projekt zakończony: 12 Lipiec

## ZRZUTY EKRANU

<img src="./images/1.gif"/>
<img src="./images/2.gif"/>
<img src="./images/3.gif"/>
<img src="./images/4.gif"/>
<img src="./images/4.gif"/>
