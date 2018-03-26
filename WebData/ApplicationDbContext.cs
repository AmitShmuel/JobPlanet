﻿using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using WebData.Data;
using WebData.IdentityModels;

namespace WebData
{
    public class ApplicationDbContext: IdentityDbContext<AppUser>
    {
        public ApplicationDbContext(DbContextOptions options)
            : base(options)
        {
        }

        public DbSet<CandidateUser> Candidates { get; set; }
        public DbSet<RecruiterUser> Recruiters { get; set; }
        public DbSet<Skill> Skills { get; set; }
        public DbSet<SkillCategory> SkillCategories { get; set; }
        public DbSet<Question> Questions { get; set; }
        public DbSet<Attachment> Attachments { get; set; }
    }
}