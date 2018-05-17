﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore.Storage.Internal;
using model;
using System;

namespace model.Migrations
{
    [DbContext(typeof(DatabaseContext))]
    [Migration("20180222171837_UpdatedEmployee")]
    partial class UpdatedEmployee
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.0.1-rtm-125")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Employee", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("address1");

                    b.Property<string>("address2");

                    b.Property<string>("city");

                    b.Property<string>("country");

                    b.Property<string>("firstName");

                    b.Property<DateTime>("hireDate");

                    b.Property<string>("lastName");

                    b.Property<string>("middleName");

                    b.Property<string>("phone");

                    b.Property<string>("state");

                    b.Property<string>("zip");

                    b.HasKey("id");

                    b.ToTable("Employee");
                });
#pragma warning restore 612, 618
        }
    }
}
