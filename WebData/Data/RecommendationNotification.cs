//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace WebData.Data
{
    using System;
    using System.Collections.Generic;
    
    public partial class RecommendationNotification
    {
        public int Id { get; set; }
        public int CandidateId { get; set; }
        public Nullable<bool> Approved { get; set; }
        public int PositionId { get; set; }
    
        public virtual Notification Notification { get; set; }
    }
}
