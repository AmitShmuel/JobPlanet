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
    
    public partial class CandidatePosition
    {
        public int Id { get; set; }
        public int PositionId { get; set; }
        public Nullable<int> CandidateUserId { get; set; }
        public string Comment { get; set; }
        public int Status { get; set; }
        public string FullName { get; set; }
        public string Email { get; set; }
    
        public virtual Position Position { get; set; }
    }
}
