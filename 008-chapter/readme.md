# Это модуль по С#

Чтобы приложение заработало в терминале прописать команду *dotnet new console*

Если вдруг не создался файл .sln поможет команда  - *dotnet new sln*

В новом проекте сразу создать файл gitignore *dotnet new gitignore*

Для быстрого запуска кода:
  в файле setting.json

```
"code-runner.executorMap": {

  "csharp": "clear && echo \">>> \"$fileName && cd $dir && dotnet run $fileName",

  },
  ```