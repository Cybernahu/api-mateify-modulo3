# API usuarios/canciones


## Contrato de la API

## GET

**GET: urlbase/songs ----> Obtienes una lista en formato Json de todas las canciones.
**GET: urlbase/songName ----> Obtienes las canciones por su nombre.

## post

**POST: urlbase/addSong ----> Aqui escribirás la nueva canción en el body, en formato Json respetando que debe tener un name, artist, 
duration y un album, ejemplo:
```{
  "name":"Clara",
  "artist":"ntvg",
  "duration":"2:30",
  "album":"album ejemplo"
}
```
**POST: urlbase/addUser ---->Aqui escribirás el nuevo User en el body, en formato Json respetando que debe tener un userName y pwd(password), 
ejemplo:
```
{
  "userName":"nahuelin0087",
  "pwd":"123456789"
}
```

## POST FAVS

**POST: urlbase/addFavSong ----> Aqui escribirás la id de la canción que desees agregar a favoritos, lo escribirá en el body con formato Json, 
ejemplo con un id cualquiera:
```
{
  "_id":"285dkcbegh478t4"
}
```

## Delete

**DELETE: urlbase/delSong ----> Aqui escribirás la id de la canción que desees eliminar, lo escribirá en el body con formato Json, 
ejemplo con un id cualquiera:
```
{
  "_id":"285dkcbegh478t4"
}
```
**DELETE: urlbase/delUser ----> Aqui escribirás la id del user al que desees eliminar, lo escribirá en el body con formato Json, 
ejemplo con un id cualquiera:
```
{
  "_id":"285dkcbegh478t4"
}
```
## DELETE FAVS


**DELETE: urlbase/delFavSong ----> Aqui escribirás la id de la canción que desees eliminar de favoritos, lo escribirá en el body con formato Json, 
ejemplo con un id cualquiera:
```
{
  "_id":"285dkcbegh478t4"
}
```


