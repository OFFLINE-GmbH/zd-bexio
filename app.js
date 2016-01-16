(function () {

    return {

        requests: {
            createContacts: function (contacts) {
                return {
                    url: '/api/v2/users/create_or_update_many.json',
                    type: 'POST',
                    dataType: 'json',
                    data: {
                        users: [
                            {name: 'Testuser', email: 'testemail@example.org', role: 'end-user', verified: true},
                            {name: 'Testuser2', email: 'testemail2@example.org', role: 'end-user', verified: true}
                        ]
                    }
                }
            }
        },

        events: {
            'click #import': 'importContacts',
            'createContacts.done': 'importSuccessful'
        },

        importContacts: function () {

            console.log('initx');

            var data = [
                {name: 'Testuser1', email: 'tobias.kuendig@gmail.com', role: 'end-user'},
                {name: 'Testuser2', email: '2tobias.kuendig@gmail.com', role: 'end-user'},
                {name: 'Testuser3', email: '3tobias.kuendig@gmail.com', role: 'end-user'}
            ];

            this.ajax('createContacts', data);

        },

        importSuccessful: function () {
            console.log('contacts imported');
        }
    };

}());
