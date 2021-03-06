﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LoanApi.Models
{
    public interface IContextDb : IDisposable
    {
        IQueryable<T> Query<T>() where T : class;
        void Add<T>(T t) where T : class;
        void SaveChanges<T>(T t) where T : class; 
    }
}
