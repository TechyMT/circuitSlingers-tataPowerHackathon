import 'package:circuitslingers/models/Article.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

import 'models/WeatherData.dart';

Future<void> submitDataToApi(
    String firstName,
    String lastName,
    String city,
    String password,
    String email,
    String state,
    String phone,
    String country) async {
  final Map<String, dynamic> payload = {
    "firstName": firstName,
    "lastName": lastName,
    "city": city,
    "password": password,
    "email": email,
    "state": state,
    "phone": phone,
    "country": country,
  };

  const String apiUrl = "YOUR_API_ENDPOINT_URL_HERE";

  try {
    final response = await http.post(
      Uri.parse(apiUrl),
      headers: {"Content-Type": "application/json"},
      body: json.encode(payload),
    );

    if (response.statusCode == 200) {
      print("Data submitted successfully!");
    } else {
      print("Failed to submit data. Status code: ${response.statusCode}");
    }
  } catch (e) {
    print("An error occurred: $e");
  }
}

Future<void> login(String email, String password) async {
  final Map<String, dynamic> credentials = {
    "email": email,
    "password": password,
  };

  const String apiUrl = "YOUR_LOGIN_API_ENDPOINT_URL_HERE";

  try {
    final response = await http.post(
      Uri.parse(apiUrl),
      headers: {"Content-Type": "application/json"},
      body: json.encode(credentials),
    );

    if (response.statusCode == 200) {
      print("Login successful!");
    } else {
      print("Login failed. Status code: ${response.statusCode}");
    }
  } catch (e) {
    print("An error occurred: $e");
  }
}

Future<List<Article>> fetchSolarEnergyNews() async {
  const apiKey = '0bc05e4fd0574e81aa4de8e8e1388d1d';
  const query =
      'solar energy OR renewable energy OR clean energy OR sustainability'
      ' OR energy efficiency OR eco-friendly OR green energy OR solar power OR'
      ' solar panels OR photovoltaic OR solar installation OR energy consumption'
      ' OR energy education OR environmental awareness';
  final response = await http.get(
    Uri.parse('https://newsapi.org/v2/everything?q=$query&apiKey=$apiKey'),
  );

  if (response.statusCode == 200) {
    final Map<String, dynamic> data = json.decode(response.body);
    final List<dynamic> articles = data['articles'];
    return articles.map((article) => Article.fromJson(article)).toList();
  } else {
    throw Exception('Failed to load news');
  }
}

Future<List<Article>> fetchNewsArticles() async {
  // const country = 'in';
  // const apiKey = '0bc05e4fd0574e81aa4de8e8e1388d1d';
  // const query =
  'solar energy OR renewable energy OR energy consumption OR sustainability';

  final url = Uri.parse(
      'https://newsapi.org/v2/top-headlines?country=in&apiKey=0bc05e4fd0574e81aa4de8e8e1388d1d');
  final response = await http.get(url);

  if (response.statusCode == 200) {
    final Map<String, dynamic> data = json.decode(response.body);

    final List<dynamic> articlesData = data['articles'];
    print(articlesData);
    final articles =
        articlesData.map((article) => Article.fromJson(article)).toList();

    return articles;
  } else {
    throw Exception('Failed to load news articles');
  }
}

Future<WeatherData> fetchWeather() async {
  const apiKey = '40a57483ec0767498677823eace974c0';
  const city = 'Pune';
  final apiUrl = Uri.parse(
      'https://api.openweathermap.org/data/2.5/weather?q=$city&appid=$apiKey&units=metric');
  final response = await http.get(apiUrl);

  if (response.statusCode == 200) {
    final data = jsonDecode(response.body);
    return WeatherData.fromJson(data);
  } else {
    throw Exception('Failed to load weather data');
  }
}
