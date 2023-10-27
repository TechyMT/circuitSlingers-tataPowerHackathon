import 'package:circuitslingers/models/Article.dart';
import 'package:circuitslingers/models/CustomListTile.dart';
import 'package:circuitslingers/networking.dart';
import 'package:flutter/material.dart';

class NewsPage extends StatelessWidget {
  const NewsPage({super.key});

  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
      length: 2,
      child: Scaffold(
        appBar: AppBar(
          centerTitle: true,
          title: const Text("What's buzzing around?"),
          bottom: const TabBar(
            tabs: [
              Tab(text: 'India News'),
              Tab(text: 'World News'),
            ],
          ),
        ),
        body: TabBarView(
          children: [
            NewsTab(),
            NewsTab1(),
          ],
        ),
      ),
    );
  }
}

class NewsTab extends StatefulWidget {
  NewsTab({super.key});

  @override
  _NewsTabState createState() => _NewsTabState();
}

class _NewsTabState extends State<NewsTab> {
  late Future<List<Article>> newsFuture;

  @override
  void initState() {
    super.initState();
    newsFuture = fetchNewsArticles();
  }

  @override
  Widget build(BuildContext context) {
    return FutureBuilder<List<Article>>(
      future: newsFuture,
      builder: (context, snapshot) {
        if (snapshot.connectionState == ConnectionState.waiting) {
          return const Center(child: CircularProgressIndicator());
        } else if (snapshot.hasError) {
          return Center(child: Text('Error: ${snapshot.error}'));
        } else {
          final articles = snapshot.data;
  
          return ListView.builder(
              itemCount: articles!.length,
              itemBuilder: (context, index) {
                final article = articles[index];

                return Column(
                  children: <Widget>[
                    CustomListTile(
                      title: article.title,
                      description: article.description,
                    ),
                    const Divider(
                      color: Colors.black, // Divider color
                      thickness: 1.0, // Divider thickness
                    ),
                  ],
                );
              });
        }
      },
    );
  }
}

class NewsTab1 extends StatefulWidget {
  NewsTab1({super.key});

  @override
  _NewsTab1State createState() => _NewsTab1State();
}

class _NewsTab1State extends State<NewsTab1> {
  late Future<List<Article>> newsFuture;

  @override
  void initState() {
    super.initState();
    newsFuture = fetchSolarEnergyNews();
  }

  @override
  Widget build(BuildContext context) {
    return FutureBuilder<List<Article>>(
      future: newsFuture,
      builder: (context, snapshot) {
        if (snapshot.connectionState == ConnectionState.waiting) {
          return const Center(child: CircularProgressIndicator());
        } else if (snapshot.hasError) {
          return Center(child: Text('Error: ${snapshot.error}'));
        } else {
          final articles = snapshot.data;
       
          return ListView.builder(
              itemCount: articles!.length,
              itemBuilder: (context, index) {
                final article = articles[index];

                return Column(
                  children: <Widget>[
                    CustomListTile(
                      title: article.title,
                      description: article.description,
                    ),
                    const Divider(
                      color: Colors.black, // Divider color
                      thickness: 1.0, // Divider thickness
                    ),
                  ],
                );
              });
        }
      },
    );
  }
}
