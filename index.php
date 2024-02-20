<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <title>Repaso Examen</title>
</head>
<body>
    <div class="container">
        <div class="paginacion mt-4">
            <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center">
                    <button class="btn btn-primary rounded rounded-4" id="previo">Anterior</button>
                    <div id="numeros"></div>
                    <button class="btn btn-primary rounded rounded-4" id="siguiente">Siguiente</button>
                </ul>
            </nav>
        </div>
        <div class="row mt-3" id="contenido"></div>
    </div>
    <script src="./app/controller/api.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
</body>
</html>