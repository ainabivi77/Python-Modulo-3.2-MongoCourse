db.createUser({
    user: 'ainara',
    pwd: '1422019',
    customData: { starDate: new Date() },
    roles: [
        { role: 'clusterAdmin', db: 'admin' },
        { role: 'readAnyDatabase', db: 'admin' },
        'readWrite'
    ]
})
