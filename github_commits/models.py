from django.db import models


class Repository(models.Model):

    url = models.CharField(max_length=2047)


class Commit(models.Model):

    repository = models.ForeignKey('github_commits.Repository')
    message = models.TextField(blank=True, default='')

    class Meta:
        app_label = 'github_commits'
