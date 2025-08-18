serve:
	uv run honcho start

runserver:
	uv run manage.py runserver

# This is to check static files with collectstatic and DEBUG = False
# runserver doesn't permit this by default.
insecure:
	uv run manage.py runserver --insecure
