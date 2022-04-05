from crontab import CronTab

cron = CronTab(user='username')
job = cron.new(command='python scan.py')
job.minute.every(1)
cron.write()
