﻿using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using WebData;
using WebData.Data;
using WebData.Dtos;
using WebData.HelperModels;
using WebData.Repositories;
using System.Net;
using System.IO;

namespace WebService.Controllers
{
    [Route("api/[controller]")]
    [Authorize(Policy = "ApiUser")]
    public class QuestionsController: BaseController<QuestionsController>
    {

        public QuestionsController(ApplicationDbContext appDbContext, IMapper mapper,
            ILogger<QuestionsController> log, IHttpContextAccessor httpContextAccessor) : base(appDbContext, mapper, log, httpContextAccessor)
        {
        }

        [HttpGet]
        public IEnumerable<QuestionDto> Get()
        {

            IEnumerable<QuestionDto> results = null;

            try
            {
                var allQuestions = new QuestionsRepository(_appDbContext).GetAll();
                results = _mapper.Map<IEnumerable<Question>, IEnumerable<QuestionDto>>(allQuestions);
            }
            catch(Exception e)
            {
                _log.LogError(e.Message);
            }
            return results;
        }

        [HttpGet("publishedQuestions")]
        public IEnumerable<QuestionDto> GetPublishedQuestions()
        {
            IEnumerable<QuestionDto> results = null;
            try
            {
                var questions = new QuestionsRepository(_appDbContext).Find(p => p.CreatedBy == _clientData.Id);
                results = _mapper.Map<IEnumerable<Question>, IEnumerable<QuestionDto>>(questions);
            }
            catch(Exception e)
            {
                _log.LogError(e.Message);
            }
            return results;
        }

        [HttpPost("publishQuestion")]
        public QuestionDto PublishQuestion([FromBody] QuestionDto questionDto)
        {
            Question savedQuestion = null;
            try
            {
                savedQuestion = new QuestionsRepository(_appDbContext).SaveOrUpdateQuestion(questionDto, _clientData);
            }
            catch(Exception e)
            {
                _log.LogError(e.Message);
                return null;
            }
            return _mapper.Map<Question, QuestionDto>(savedQuestion);
        }

        [HttpPost("searchQuestions")]
        public IEnumerable<QuestionDto> SearchQuestions([FromBody] SearchQuestionsQuery query)
        {

            IEnumerable<QuestionDto> results = null;

            try
            {
                var questions = new QuestionsRepository(_appDbContext).GetQuestionsByQuery(query);
                results = _mapper.Map<IEnumerable<Question>, IEnumerable<QuestionDto>>(questions);
            }

            catch(Exception e)
            {
                _log.LogError(e.Message);
            }

            return results;
        }

    }
}