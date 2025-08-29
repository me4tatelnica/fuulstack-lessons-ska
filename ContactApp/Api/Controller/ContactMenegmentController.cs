using Microsoft.AspNetCore.Mvc;

public class ContactMenegmentController : BaseController
{
  private readonly ContactStorage storage;
  private object contactStorage;

  public ContactMenegmentController(ContactStorage storage)
  {
    this.storage = storage;
  }

  public ContactStorage ContactStorage { get; }

  [HttpPost("contacts")]
  public IActionResult Create(Contact contact)
  {
    bool res = storage.Add(contact);
    if (res)
    {
      return Created($"/contacts/{contact.Id}", contact);
    }
    return Conflict("Контакт с указанным ID существует");
  }

  [HttpGet("contacts")]
  public ActionResult<List<Contact>> GetContacts()
  {
    return Ok(storage.GetContacts());
  }

  [HttpDelete("contacts/{id}")]
  public IActionResult DeleteContact(int id)
  {
    bool res = storage.Remove(id);
    if (res) return NoContent();
    return BadRequest("Ошибка ID");

  }

  [HttpPut("contacts/{id}")]
  public IActionResult UpdateContact([FromBody] ContactDto contactDto, int id)
  {
    bool res = storage.UpdateContact(contactDto, id);
    if (res) return Ok();
    return Conflict("Контакт с указанным ID не нашелся");
  }

  [HttpGet("contacts/{id}")]
  public IActionResult SearchContact(int id)
  {
    if (id < 0)
    {
      return BadRequest("Неверный формат ID");
    }

    Contact res = storage.SearchContact(id);
    if (res != null) return Ok(res);
    return NotFound("Контакт не найден");
  }
}