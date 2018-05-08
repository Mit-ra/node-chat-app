   var socket = io();

        socket.on('connect', function () {
            console.log('connected to server');

            // socket.emit('createEmail', {
            //     to: 'jen@example.com',
            //     text: 'Hey this is krina'
            // });

            socket.emit('createMessage', {
                from: 'Krina',
                text: 'yup that works for me'
            });
        });

        socket.on('disconnect', function () {
            console.log('disconnected to server');
        });

        // socket.on('newEmail', function (email) {
        //     console.log('New Email', email);
        // });

        socket.on('newMessage', function(message) {
            console.log('newMessage', message);
        });