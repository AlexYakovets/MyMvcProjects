﻿using Microsoft.Owin;
using MyMeetings.Models;
using Owin;

[assembly: OwinStartupAttribute(typeof(MyMeetings.Startup))]
namespace MyMeetings
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
