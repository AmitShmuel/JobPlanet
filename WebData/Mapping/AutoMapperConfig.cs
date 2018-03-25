﻿using AutoMapper;
using WebData.Data;
using WebData.Dtos;

namespace WebData.Mapping
{
    public class AutoMapperConfig: Profile
    {

        public AutoMapperConfig()
        {

            CreateMap<Skill, SkillDto>();
            CreateMap<SkillDto, Skill>()
                .ForMember(s => s.CreatedBy, opt => opt.Ignore())
                .ForMember(s => s.LastUpdateBy, opt => opt.Ignore())
                .ForMember(s => s.SkillCategory, opt => opt.Ignore());

            CreateMap<SkillCategory, SkillCategoryDto>()
                .ForMember(s => s.Skills, opt => opt.Condition(s => s.Skills != null));

            CreateMap<SkillCategoryDto, SkillCategory>()
                .ForMember(s => s.Skills, opt => opt.Condition(s => s.Skills != null));


            CreateMap<Question, QuestionDto>();
            CreateMap<QuestionDto, Question>()
                //.ForMember(q => q.RankedCount, opt => opt.Ignore())
                //.ForMember(q => q.CreatedBy, opt => opt.Ignore())
                //.ForMember(q => q.LastUpdateBy, opt => opt.Ignore())
                .ForMember(q => q.DateCreated, opt => opt.Condition(q => q.DateCreated != null))
                .ForMember(q => q.LastUpdateDate, opt => opt.Condition(q => q.LastUpdateDate != null));
        }
    }
}