<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf_token" content="{{ csrf_token() }}">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <!-- Style -->
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">

    <!-- Script -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    {{-- <title>Laravel Vue js</title> --}}
</head>
<body>
    @yield('content')
</body>
</html>