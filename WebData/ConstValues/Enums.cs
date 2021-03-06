﻿
namespace WebData.ConstValues
{

    public enum UserType
    {
        Candidate = 1,
        Recruiter = 2,
    }

    public enum AccessModifier
    {
        Private = 1,
        Shared = 2,
        Public = 3,
    }

    public enum RefObjectType
    {
        Candidate = 1,  // Resume
        Question = 2,   // Attachment
    }

    public enum QuestionState
    {
        General = 1,
        InMyTodoList = 2,
        InMyDoneList = 3,
        PublishedByMe = 4,
    }

    public enum PositionStatus
    {
        Opened = 1,
        Closed = 2,
        Pending = 3,
    }

    public enum CandidatePositionStatus
    {
        InProgress = 1,
        PendingAnswer = 2,
        Recruited = 3,
        Denied = 4,
        Recommended = 5,
    }

    public enum MatchingVectorIndex
    {
        DifficultyLevel = 0,

        // Leaving room for future matching parameters

        StartOfSkills = 20,
    }

    public enum NotificationType
    {
        Recommendation = 1,
    }
}