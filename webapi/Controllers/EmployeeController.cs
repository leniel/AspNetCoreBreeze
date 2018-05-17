using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Breeze.AspNetCore;
using Breeze.Persistence;
using Breeze.Persistence.EFCore;
using Microsoft.AspNetCore.Mvc;
using model;

namespace webapi.Controllers
{
    [Route("breeze/[controller]/[action]")]
    [BreezeQueryFilter]
    public class EmployeeController : Controller
    {
        private DatabaseContext _context;

        private PersistenceManager PersistenceManager;

        public EmployeeController(DatabaseContext context) {
            this._context = context;
            PersistenceManager = new PersistenceManager(context);
        }

        [HttpGet]
        public IActionResult Metadata() {
            return Ok(PersistenceManager.Metadata());
        }
        
        [HttpGet]
        public IQueryable<Employee> Get()
        {
            return PersistenceManager.Context.Employees;
        }
    }
}
